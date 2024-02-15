import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When('I execute request', () => {
  cy.request('https://jsonplaceholder.typicode.com/posts').as('request')
})

Then('Response is correct', () => {
  cy.get('@request').should((response: any) => {
    expect(response.status).to.eq(200, 'response should have status OK')
    expect(response).property('headers').property('content-type').to.contain('application/json')
    const postIds = response.body.map((it: any) => parseInt(it.id))
    const sortedIds = [...postIds].sort((a, b) => a - b)
    expect(postIds).to.deep.equal(sortedIds)
  })
})
