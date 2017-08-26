module.exports = (response, status, payload) => {
  response.status(status)
  response.json(payload)
}
