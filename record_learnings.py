def record():
  print("When working with Dart's package:web and package:webdev, dependencies in pubspec.yaml can sometimes clash with the system's SDK version. Relaxing sdk version constraints (e.g., `>=3.11.0 <4.0.0`) can easily solve pub get errors without requiring upgrading/downgrading the local SDK. The `webdev build` generates build artifacts that shouldn't be tracked on git. Playwright test on Dart apps can sometimes require long timeouts, because they pull `dart2js` files when loading initially.")

if __name__ == "__main__":
  record()
