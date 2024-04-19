# rAInbow: **A Journaling App that Uses Colors to Track Mental Health**

This code is for a mental health journaling app called rAInbow. This is the basic feature development. As of now, the features include a list of 10 self-assessment questions based on a color-coded rating system as well as a traditional journaling feature for a more in-depth reflection.

## Set Up
This app is developed on Visual Studio Code using Expo and React Native and tested on a xcode simulator. 

## Folders and Files
1. Ignore everything other than **assests, components, screens, and, App.js.**
2. **assests** holds all the pictures used in the background of the app and other standard expo files.
3. **components** holds a file called *CustomButton.js* which is used for the style and functionality of certain navigation buttons.
4. **screens** is where the crux of the project is. It includes:
	1. *HomeScreen.js:* Landing screen, provides options to access features.
	2. *JournalEntryScreen.js:* Traditional journal entry screen.
	3. *SelfAssesmentScreen.js: * Q1 of self-assessment questions.
	4. *SelfAssesmentScreen2.js:*Q2 of self-assessment questions.
	5. *SelfAssesmentScreen3.js:* Q3 of self-assessment questions.
	6. *SelfAssesmentScreen4.js:* Q4 ...
	7. *SelfAssesmentScreen5.js:*Q5 ...
	8. *SelfAssesmentScreen6.js:* Q6 ...
	9. *SelfAssesmentScreen7.js:* Q7 ...
	10. 10.*SelfAssesmentScreen8.js:* Q8 ...
	11. *SelfAssesmentScreen9.js:* Q9 ...
	12. *SelfAssesmentScreen10.js:* Q10 ...
5. **App.js** is crucial for navigating around the app.

## Basic Run Through
When the app is opened, the user can choose between self-assessment questions or filling out a traditional journal entry. If users pick the first, they go through a list of 10 questions based on a color-coded rating system. For example, "How was you day?" is associated with blue so all ratings will be different shades of blue. With darker ones representing negative emotions and vice versa. Each question has error handling in case a user tries to move ahead without choosing a rating. All screens have navigation abilities to go back or to the next screen as long as all the requirements for that screen are met. 
As for the journal entry section, the user can input anything they want but it will not be saved if the 'save' button is not clicked. Though, once it is saved and the app has shown a message that conveys the same, the information will be there even after exiting the app. It can also be edited whenever. The only limitation is having to hit save.
