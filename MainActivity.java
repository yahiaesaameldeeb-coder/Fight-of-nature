package com.yahia.thefightofnature;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;
import android.graphics.Color;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.content.pm.ActivityInfo;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.Gravity;

public class MainActivity extends Activity {
    private WebView webView;
    private FrameLayout root;
    @Override public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        hideSystemUI();

        root = new FrameLayout(this);
        root.setBackgroundColor(Color.rgb(5,7,12));
        setContentView(root);

        ImageView logo = new ImageView(this);
        logo.setImageResource(com.yahia.thefightofnature.R.drawable.splash_logo);
        logo.setScaleType(ImageView.ScaleType.CENTER_INSIDE);
        FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(220,220,Gravity.CENTER);
        root.addView(logo, lp);

        TextView title = new TextView(this);
        title.setText("THE FIGHT OF NATURE"); title.setTextColor(Color.WHITE); title.setTextSize(18); title.setGravity(Gravity.CENTER);
        FrameLayout.LayoutParams tp = new FrameLayout.LayoutParams(-1,60,Gravity.CENTER_HORIZONTAL|Gravity.BOTTOM); tp.bottomMargin=70;
        root.addView(title,tp);

        new Handler().postDelayed(() -> startGame(), 900);
    }
    private void startGame(){
        webView = new WebView(this); root.removeAllViews(); root.addView(webView, new FrameLayout.LayoutParams(-1,-1));
        WebSettings s=webView.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); s.setDatabaseEnabled(true); s.setAllowFileAccess(true); s.setAllowContentAccess(true); s.setMediaPlaybackRequiresUserGesture(false); s.setBuiltInZoomControls(false); s.setDisplayZoomControls(false);
        webView.setWebViewClient(new WebViewClient()); webView.setWebChromeClient(new WebChromeClient()); webView.setOverScrollMode(View.OVER_SCROLL_NEVER); webView.setBackgroundColor(Color.BLACK); webView.loadUrl("file:///android_asset/index.html");
    }
    private void hideSystemUI(){ getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_FULLSCREEN|View.SYSTEM_UI_FLAG_HIDE_NAVIGATION|View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY|View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN|View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION|View.SYSTEM_UI_FLAG_LAYOUT_STABLE); }
    @Override public void onWindowFocusChanged(boolean hasFocus){ super.onWindowFocusChanged(hasFocus); if(hasFocus) hideSystemUI(); }
    @Override public void onBackPressed(){ if(webView!=null && webView.canGoBack()) webView.goBack(); else super.onBackPressed(); }
}
