using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.UI;

public class LagDisplay : MonoBehaviour
{
    public RectTransform rectangle;
    public Text text;
    
    public Text text2;

    int busyLoopMs;
    
    void Start()
    {
        StartWorker();
    }
    
    public void addBusyLoopMs(int ms) {
        busyLoopMs += ms;
        if (busyLoopMs < 0) busyLoopMs = 0;
    }

    void Update()
    {
        var value = GetTimeDiff();
        rectangle.SetSizeWithCurrentAnchors(RectTransform.Axis.Horizontal, (float) (value * 10));
        text.text = $"{value:0}ms";
        
        text2.text = $"{busyLoopMs}ms";

        if (busyLoopMs > 0)
        {
            var busyUntil = Time.realtimeSinceStartupAsDouble + busyLoopMs / 1000.0;
            while (Time.realtimeSinceStartupAsDouble < busyUntil)
            {
                // busy loop
            }
        }
    }
    
    [DllImport("__Internal")]
    private static extern void StartWorker();
    
    [DllImport("__Internal")]
    private static extern double GetTimeDiff();
}
