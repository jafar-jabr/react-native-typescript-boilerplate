import Foundation
import UIKit
//import Firebase

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {

  var window: UIWindow?
  var bridge: RCTBridge!

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    initializeFlipper(with: application)
    // Use Firebase library to configure APIs
   // FirebaseApp.configure()

    //inite notifications if wanted
    if #available(iOS 10.0, *) {
      UNUserNotificationCenter.current().delegate = self
    } else {
      // Fallback on earlier versions
    }
    if #available(iOS 10.0, *) {
      UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound]) { (granted, error) in
        if granted {
          // Access granted
        } else {
          // Access denied
        }
      }
    } else {
      // Fallback on earlier versions
    }
    let bridge = RCTBridge(delegate: self, launchOptions: launchOptions)
    //=================================================add app name here==========
    let rootView = RCTRootView(bridge: bridge!, moduleName: "awesomeApp", initialProperties: nil)
    let rootViewController = UIViewController()
    rootViewController.view = rootView
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()
    //self.addCategory()
    return true

  }

 private func initializeFlipper(with application: UIApplication) {
      #if DEBUG
      #if FB_SONARKIT_ENABLED
        let client = FlipperClient.shared()
        let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())
        FlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)
        client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))
        client?.add(FKUserDefaultsPlugin(suiteName: nil))
        client?.add(FlipperKitReactPlugin())
        client?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))
        client?.add(FlipperReactPerformancePlugin.sharedInstance())
        client?.start()
      #endif
      #endif
    }
}

extension AppDelegate:RCTBridgeDelegate{
  func sourceURL(for bridge: RCTBridge!) -> URL! {
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
  }
}
