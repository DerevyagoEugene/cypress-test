@testID("id_of_test_for_testops")
@parentSuite("someParentSuite")
@suite("someSuite")
@subSuite("someSubSuite")
@epic("thisisepic")
@feature("nice")
@story("cool")
@severity("critical")
@owner("IAMOwner")
@issue("jira","JIRA-1234")
@tms("tms","TC-1234")
@link("other","url")
Feature: Scenario

  Scenario: Test 1
    When I execute request
    Then Response is correct
