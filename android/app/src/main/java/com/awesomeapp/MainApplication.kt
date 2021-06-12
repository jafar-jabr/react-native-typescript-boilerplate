package com.awesomeapp

import android.app.Application
import com.facebook.soloader.SoLoader
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage

class MainApplication : Application(), ReactApplication  {
    var onDataPass: OndataPass? = null

    private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            val packages: MutableList<ReactPackage> = PackageList(this).packages
            // Packages that cannot be autolinked yet can be added manually here, for example:
           // packages.add(yourModule())
            return packages
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        val mainActivity = MainActivity()
        mainActivity.onDataPass?.onDataPass(this.resources.getString(R.string.app_name))
        SoLoader.init(this,  /* native exopackage */false)
    }
}
