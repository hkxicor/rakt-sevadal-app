package in.raktsevadal;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.microsoft.appcenter.reactnative.push.AppCenterReactNativePushPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage;
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage;
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.microsoft.appcenter.AppCenter;
import com.microsoft.appcenter.push.Push;

import io.invertase.firebase.RNFirebasePackage;
// optional packages - add/remove as appropriate
import io.invertase.firebase.admob.RNFirebaseAdMobPackage; //Firebase AdMob
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage; // Firebase Analytics
import io.invertase.firebase.auth.RNFirebaseAuthPackage; // Firebase Auth
import io.invertase.firebase.config.RNFirebaseRemoteConfigPackage; // Firebase Remote Config
import io.invertase.firebase.database.RNFirebaseDatabasePackage; // Firebase Realtime Database
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage; // Firebase Firestore
import io.invertase.firebase.instanceid.RNFirebaseInstanceIdPackage; // Firebase Instance ID
import io.invertase.firebase.links.RNFirebaseLinksPackage; // Firebase Dynamic Links
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // Firebase Cloud Messaging
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; // Firebase Notifications
import io.invertase.firebase.perf.RNFirebasePerformancePackage; // Firebase Performance
import io.invertase.firebase.storage.RNFirebaseStoragePackage; // Firebase Storage
import io.invertase.firebase.fabric.crashlytics.RNFirebaseCrashlyticsPackage; // Crashlytics

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
          new AppCenterReactNativePushPackage(MainApplication.this), new RNFirebasePackage(),
          new AppCenterReactNativeCrashesPackage(MainApplication.this,
              getResources().getString(R.string.appCenterCrashes_whenToSendCrashes)),
          new AppCenterReactNativeAnalyticsPackage(MainApplication.this,
              getResources().getString(R.string.appCenterAnalytics_whenToEnableAnalytics)),
          new AppCenterReactNativePackage(MainApplication.this),
          // add/remove these packages as appropriate
          new RNFirebaseAdMobPackage(), new RNFirebaseAnalyticsPackage(), new RNFirebaseAuthPackage(),
          new RNFirebaseCrashlyticsPackage(), new RNFirebaseDatabasePackage(), new RNFirebaseFirestorePackage(),
          new RNFirebaseInstanceIdPackage(), new RNFirebaseLinksPackage(), new RNFirebaseMessagingPackage(),
          new RNFirebaseNotificationsPackage(), new RNFirebasePerformancePackage(), new RNFirebaseRemoteConfigPackage(),
          new RNFirebaseStoragePackage());
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Push.setSenderId("318335943129");
    SoLoader.init(this, false);
    SoLoader.init(this, /* native exopackage */ false);
  }
}
