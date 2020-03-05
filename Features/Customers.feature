Feature: Customer Functionality 

 Background: Following are common steps for every scenario
 	Given User launch Chrome browser
	When User open URL "https://admin-demo.nopcommerce.com/login"
	And User enters Email as "admin@yourstore.com" and Password as "admin" 
	And Click on Login
	Then User can view Dashboard

@smoke @sanity
Scenario: Add new Customer
	
	When User click on customer Menu
	And click on customer menu Item
	And click on Add new button
	Then User can view Add new Customer page
	When User enter customer info
	And click on save button
	Then User can view information message "The new customer has been added successfully."
	And User close the browser
	
@regression
Scenario: Search Customer by EmailId
	
	When  User click on customer Menu
	And click on customer menu Item
	And enter customer Email
	When click on Search button
	Then user should found Email in the Search table
	And User close the browser
	
	
@regression
Scenario: Search Customer by Name
#	Given User launch Chrome browser
#	When User open URL "https://admin-demo.nopcommerce.com/login"
#	And User enters Email as "admin@yourstore.com" and Password as "admin" 
#	And Click on Login
#	Then User can view Dashboard
	When  User click on customer Menu
	And click on customer menu Item
	And enter customer FirstName
	And enter customer LastName
	When click on Search button
	Then user should found Name in the Search table
	And User close the browser