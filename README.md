# Documentation for the TODO App 

## Overview:
The TODO App is a simple  application to help users manage their tasks. It allows users to add, complete, and reset tasks.

## Features:

Adding Tasks: Users can input tasks in the text field and press Enter to add them to the "Active Todo" list.
Completing Tasks: Clicking on an active task marks it as completed and moves it to the "Complete Todo" list.
Reset: Clicking the "Reset" button clears all tasks.

## Assumptions:

The app assumes that users will provide valid task descriptions when adding tasks.
It assumes that users will use the "Enter" key to add tasks.

## Usage:

Enter a task in the input field and press Enter to add it to the active list.
Click on an active task to mark it as completed.
Click the "Reset" button to clear all tasks.

## Storage:
The app uses local storage to save task data. It saves and retrieves data when the page loads, ensuring tasks are not lost on page refresh.

## Edge Cases:

No error handling for invalid input is provided; it assumes users will enter valid data.
No handling of network issues or external data sources; tasks are stored locally.
It doesn't support editing or deleting individual tasks; users can only reset all tasks.

## Conclusion:
The TODO App offers basic task management functionality. It's designed for personal use and does not handle complex scenarios or data synchronization. 