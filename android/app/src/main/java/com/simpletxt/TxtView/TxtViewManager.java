package com.simpletxt.TxtView;

import android.support.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class TxtViewManager extends SimpleViewManager<TxtView> {

    public static final String REACT_CLASS = "STTxtView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TxtView createViewInstance(ThemedReactContext reactContext) {
        return new TxtView(reactContext);
    }

    @ReactProp(name = "fileContent")
    public void setSrc(TxtView view, @Nullable String src) {
        view.setFileContent(src);
    }
}
