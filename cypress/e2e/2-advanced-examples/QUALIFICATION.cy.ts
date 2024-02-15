describe('Qualification Tests', () => {

  it('First Test', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts').should(response => {
      expect(response.status).to.eq(200, 'response should have status OK')
      expect(response).property('headers').property('content-type').to.contain('application/json')
      const postIds = response.body.map((it: any) => parseInt(it.id))
      const sortedIds = [...postIds].sort((a, b) => a - b)
      expect(postIds).to.deep.equal(sortedIds)
    })
  })
})
