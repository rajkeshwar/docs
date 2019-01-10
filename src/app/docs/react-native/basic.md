
##### https://startreact.com/themes/nativebase-kitchensink/

##### Clone and install packages

```
git clone git@github.com:GeekyAnts/NativeBase-KitchenSink.git
cd NativeBase-KitchenSink
yarn
react-native link react-native-vector-icons
```

*	**Run on iOS**
	*	Opt #1:
		*	Open the project in Xcode from `ios/NativeBase-KitchenSink.xcodeproj`
		*	Click `run` button to simulate
	*	Opt #2:
		*	Run `react-native run-ios` in your terminal


*	**Run on Android**
	*	Make sure you have an `Android emulator` installed and running
	*	Run `react-native run-android` in your terminal
  
##### Building the Android version

##### Run this command to find out Java Path
```
/usr/libexec/java_home
```

It will output `/Library/Java/JavaVirtualMachines/jdk-9.0.4.jdk/Contents/Home`

##### Command to generate signed APK 

> sudo keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000


##### Qestions to generate Signed APK

| Question                                                        | Answer      |
|-----------------------------------------------------------------|-------------|
| What is your first and last name?                               | RP          |
| What is the name of your organizational unit?                   | TS          |
| What is the name of your organization?                          | TS          |
| What is the name of your City or Locality?                      | KOLKATA     |
| What is the name of your State or Province?                     | WEST BENGAL |
| What is the two-letter country code for this unit?              | IN          |
| Is CN=RP, OU=TS, O=TS, L=KOLKATA, ST=WEST BENGAL, C=IN correct? | Yes         |


##### Place the `my-release-key.keystore` file under the `android/app` directory in your project folder.

##### Edit the file `android/gradle.properties`, and add the following (replace `*****` with the correct keystore password, alias and key password),

```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=Welcome@123
MYAPP_RELEASE_KEY_PASSWORD=Welcome@123
```

##### Adding signing config to your app's gradle config

Edit the file android/app/build.gradle in your project folder, and add the signing config

```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

##### Generating the release APK

Simply run the following in a terminal:

```
$ cd android
$ ./gradlew assembleRelease
```












