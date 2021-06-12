package com.awesomeapp

import android.os.Bundle
import android.os.PersistableBundle
import com.facebook.react.ReactActivity
import java.util.logging.Logger

class MainActivity() : ReactActivity() {
    var onDataPass: OndataPass? = null

    override fun onCreate(savedInstanceState: Bundle?, persistentState: PersistableBundle?) {
        super.onCreate(savedInstanceState, persistentState)

    }
    override fun getMainComponentName(): String? {
        var passeData = "awesomeApp";
        val Log = Logger.getLogger("GET_VALUE")
        onDataPass = object : OndataPass {
            override fun onDataPass(data: String?) {
                if (data != null) {
                    passeData=data
                    Log.warning("dataPassed onDataPass ="+passeData)

                };
            }
        }
        Log.warning("dataPassed befor return ="+passeData)
        return passeData // the idea is to read this name from resources
    }

}