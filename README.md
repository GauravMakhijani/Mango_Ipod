LINK : https://mango-ipod.netlify.app/

## Tools Used

<img src="https://miro.medium.com/max/1024/1*oT_l6QxMdTN65-0gwFqeNg.png" width=300px><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width=200px>

1. Firebase cloud storage (to store songs).
2. React JS

## Screenshots

<img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/1.png" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/2.PNG" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/3.PNG" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/4.PNG" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/5.PNG" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/6.PNG" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/7.PNG" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/8.PNG" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/9.PNG" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/10.PNG" width=400px><img src="https://github.com/parikshit223933/Reactive-Pod/blob/master/src/Screens/11.png" width=400px>

## Features

1. Rotation-On simulation. (Device rotates and so does screen and buttons).
2. Firebase Storage is used. Songs are streamed from Google's high speed Firebase Storage.
3. Instructions are mentioned on the screen. No room for any type of confusion.
4. Action buttons light up when a song is being played.
5. Lightening fast React JS based app.
6. More songs can be added to the database with small changes here and there in the code. (Currently 6 songs for illustration)
7. Swipe Enabled, i.e. One can swipe through the 4 buttons given in the circular portion to navigate through the menu.
8. Songs can be switched without going to the All Songs screen again and again. (using the left and right arrow buttons provided in the Circular Actions Button Section).

## How to use?

1. In the group of circular action buttons section (See the screenshots), the upper-most button is the menu button. left and right buttons are navigation buttons(to navigate in All songs only). The bottom-most button is the Play/Pause button to stop or play the current song.
2. To navigate in the menu, just swipe clockwise if you want to select an item which is available below the currently selected item. And similarly, swipe anti-clockwise if you want to select an item which is available above the currently selected item.
3. Go to All Songs in the Music Section to view a list of all songs available currently on the Cloud Storage. (Make sure you are connected to the internet).
4. To play a song click the "Select" button. Also to select a section from the list of Sections in the menu, press "Select Button".
5. To change a song while another one is being played, click on the left or right arrow buttons and click on the Play/Pause button on the bottom.
6. To rotate the screen, press the small circular button with `Rotation` symbol on the right mid on the app.
7. Songs can be found in the Music/All Songs Section. All other pages are dummy pages for illustration purposes.

## IMPORTANT:

> An api Key is used to access the Firebase storage. which is in the SRC/index.js as process.env.REACTIVE_POD_API_KEY. It is intentionally hidden for security purposes. You may have to use your own Firebase Storage to edit and test the code on your system.

## Known Bugs:

1. Changing lights in the circular buttons section stays ON even when the song has finished playing.

ENJOY :)
