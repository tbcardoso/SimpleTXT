package com.simpletxt.TxtView;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;

import com.simpletxt.R;

/**
 * TODO: document your custom view class.
 */
public class TxtView extends FrameLayout {

    TextView txtContent;

    public TxtView(Context context) {
        super(context);
        init(context, null, 0);
    }

    public TxtView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context, attrs, 0);
    }

    public TxtView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init(context, attrs, defStyle);
    }

    private void init(Context context, AttributeSet attrs, int defStyle) {

        String fileContent = null;

        final TypedArray a = getContext().obtainStyledAttributes(
                attrs, R.styleable.TxtView, defStyle, 0);
        try {
            fileContent = a.getString(R.styleable.TxtView_fileContent);
        } finally {
            a.recycle();
        }

        this.setLayoutParams(new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));

        LayoutInflater.from(context).inflate(R.layout.txt_view, this);

        txtContent = (TextView) this.findViewById(R.id.txt_view_content);
        txtContent.setText(fileContent);
    }

    @Override
    public void requestLayout() {
        super.requestLayout();
        post(measureAndLayout);
    }

    private final Runnable measureAndLayout = new Runnable() {
        @Override
        public void run() {
            measure(
                    MeasureSpec.makeMeasureSpec(getWidth(), MeasureSpec.EXACTLY),
                    MeasureSpec.makeMeasureSpec(getHeight(), MeasureSpec.EXACTLY));
            layout(getLeft(), getTop(), getRight(), getBottom());
        }
    };

    public void setFileContent(String fileContent) {
        txtContent.setText(fileContent);
    }
}
