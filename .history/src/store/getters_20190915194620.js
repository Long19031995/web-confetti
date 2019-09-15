export default {
  getListHistory (state) {
    const getQuestion = (questionAndAnswer = '') => {
      const question = questionAndAnswer.split('\n\n')[0] || ''

      return question.replace(/Question: /g, '').trim()
    }

    const getListAnswer = (questionAndAnswer = '', correctAnswer = '') => {
      const listItem = (questionAndAnswer.split('\n\n')[1] || '').split('\n')

      const listAnswer = listItem.map((item) => {
        const answer = item.replace(/[1|2|3]: /g, '').trim()
        const correct = correctAnswer.includes(answer)

        return { answer, correct }
      })

      return listAnswer
    }

    const output = state.history.output || []

    const historyYesterday = (output[0] || {}).data || []

    const listHistory = []
    for (let i = 0; i < historyYesterday.length; i += 2) {
      const questionAndAnswer = (historyYesterday[i] || {}).data
      const correctAnswer = (historyYesterday[i + 1] || {}).data

      const question = getQuestion(questionAndAnswer)
      const listAnswer = getListAnswer(questionAndAnswer, correctAnswer)

      listHistory.push({ question, listAnswer })
    }

    return listHistory
  },

  getListQuestion (state, getters) {
    const listHistory = getters.getListHistory

    const listQuestion = listHistory.map((history) => history.question)

    return listQuestion
  },

  getQAndA (state) {
    const current = state.current || {}

    const question = current.question || ''
    const listAnswer = current.answers || []

    const qAndA = { question, listAnswer }

    return qAndA
  },

  getCorrectAnswer (state) {
    const answer = state.answer || {}

    let correctAnswer = answer.correct_answer || ''

    correctAnswer = correctAnswer.match(/.*Đáp án đúng:(.*)\(.*\)/) || []
    correctAnswer = correctAnswer[1] || ''
    correctAnswer = correctAnswer.trim()

    return correctAnswer
  },

  getListSearchResult (state) {
    const current = state.current || {}
    const searchResult = current.search_result || []

    return searchResult
  }
}