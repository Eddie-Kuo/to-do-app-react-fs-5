## Plan - order of operations

1) Create the Header Component
    - this will stay the same for both pages 
    - information will be added into the header + logout button if a user exists. logical && operator

2) Set up the Auth component to receive user inputs 
    <!-- - /Auth/Sign-in or Sign-up
    - basic html and css to make the page functional -->
    - set up auth functions within Services folder - this will store user data with supabase rls
    - clickHandler for when the inputs are filled out 
        - if user signs in and account exists, Redirect them to their list
        - if user signs in and account doesn't exist then load error
        - if user signs up and account doesn't exist then Redirect them to empty list
        - if user signs up and account exists, load a different error 

        State: 
        - user
        - email
        - password 
        - type - router params

3) Set up list component 
    - /Auth/List
    - firstly, page needs to check if the user is authenticated
        - if !user, redirect back to the auth page to sign in or sign up 
    - user should be able to see and input and a button to add their items
    - user should be able to type and submit items 
        - items should populate in the list below with a checkbox 
    - user should be able to see a preloaded list if they already have items in their list 
    - user should be able to mark each item as completed 

        state: 
        - user
        - task 
        - completed task
        - logout? 
    
Header Component will change to give a personal greeting according to the user who is logged in 