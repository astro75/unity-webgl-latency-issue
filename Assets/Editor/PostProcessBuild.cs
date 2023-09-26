using System.IO;
using UnityEditor;
using UnityEditor.Callbacks;

public class PostProcessBuild 
{
    [PostProcessBuild(1)]
    public static void OnPostprocessBuild(BuildTarget target, string pathToBuiltProject) {
        File.Copy("Assets/worker.js", $"{pathToBuiltProject}/worker.js", overwrite: true);
    }
}
