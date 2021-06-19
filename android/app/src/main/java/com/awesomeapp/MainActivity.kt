package com.awesomeapp

import android.os.Bundle
import android.os.PersistableBundle
import com.facebook.react.ReactActivity

class MainActivity() : ReactActivity() {
    override fun onCreate(savedInstanceState: Bundle?, persistentState: PersistableBundle?) {
        super.onCreate(savedInstanceState, persistentState)

    }
    override fun getMainComponentName(): String? {
        return "awesomeApp"
    }
}
