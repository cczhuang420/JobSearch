<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-cczhuang420/blob/main/jobsearch/assets/icons/icon1.png?raw=true">
    <img src="jobsearch/assets/icons/icon1.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">JobSearch</h3>

  <p align="center">
    A mobile application that help you find your dream job!  
    <br />
    <a href="https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-cczhuang420/tree/main/jobsearch"><strong>Explore the codes »</strong></a>
    <br />
    <br /> 
  </p>

</div>

## About The Project   
<p>
This mobile app is designed to provide users a convenient and efficient platform for users to search jobs that integrates the JSearch API. Users can use the app to search for specific job information and retrieve relevant results. 
The app is built using React Native with Expo, which provides a set of pre-configured tools and services to make it easier to develop, build, and deploy the app.
</p>

### Built With

This section should list any major language/frameworks/libraries/platform used in this project.


[![Android]][Android-url]
[![IOS]][ios-url]
[![React.js]][React-url]
[![Reactnative]][Reactnative-url]
[![JavaScript]][JavaScript-url]

## Getting Started

This is an instruction for how you can run the app in the terminal

### Prerequisites

#### Rapid API
<p>This app was developed using rapidapi:<a href="https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch"> JSearch</a> </p>

* You will need to sign up and subscribe to use this API. They offer a basic plan which is free for "200 requests/month"
* Normally it is enough for testing: however, please contact the author if you encounter any problem.
* Copy your X-RapidAPI-Key, and go to the .env file; then, place your API key there.

#### How to run?
You will need to have npm installed to be able to run this app. There are two options to test this app:

<p> 1, Run with mobile phone</p>

<p> 2, Run with simulator</p>

<p> I will give both instructions for you to test in the later section <a href="options"> later section</a>. First in the terminal: </p>


```
cd jobsearch
```  


Install dependencies:
```
npm install
```

**Note:**
Please allow the app to run for while when you test it. It will need to be properly loaded so everything will be good.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="options"></a>

#### Android or IOS ?
* Android (Recommended): 
  * Using your mobile phone: 
    <p> 1, Download the <a href="https://expo.dev/client"> Expo Go app</a></p>
    <p>2, Run the following command, it will ask to bundle with Expo Go or simulator to run the app </p>
    
    ```
    npx expo start --tunnel
    ```

    <p>3, Open Expo Go and Scan the QR code. Then wait for a while to allow the app being bundled</p>
    
  * Using Android simulator:
    <p>Feel free to use simulator if you have any; however if you are using Android phone, it is recommended to download Expo Go</p>


* IOS (Formatting may be different for different device):
    * Using your mobile phone (Recommended):
      <p> 1, Download the <a href="https://expo.dev/client"> Expo Go app</a> and sigin with your account</p>
      <p> 2, You will need to login in the terminal too. Run the following command: </p>
      
      ```
      expo login
      ```

      <p>3, Run the following command, it will ask to bundle with Expo Go or simulator to run the app </p>

      ```
      npx expo start --tunnel
      ```

      <p>4, Use the camera app to can the QR code and you will see "open in Expo Go". Then wait for a while to allow the app being bundled</p>

    * <a href="https://docs.expo.dev/workflow/ios-simulator/"> Using Iphone simulator </a>(Xcode):
      <p>1, Install Xcode, and run the following command if haven't configure yet</p>
      
      ```
      sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
      ```

      <p>2, Open Xcode and run the command: </p>
    
      ```
      npx expo start 
      ```
      <p>3, hit "shit+i" to choose the simulator. I recommend using iphone12</p>
    
    
**Note:**
Running the mobile app using simulator may have some delay. Please allow the app to run for a while to be fully bundled.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[Android]: https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white
[Android-url]: https://www.android.com/intl/en_nz/

[IOS]:https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white
[ios-url]: https://www.apple.com/nz/ios/ios-16/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Reactnative]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Reactnative-url]: https://reactnative.dev/

[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JavaScript-url]: https://www.javascript.com/

