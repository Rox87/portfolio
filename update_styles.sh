#!/bin/bash
sed -i 's/--bg-color: #0b1120;/--bg-color: #000000;/g' web/styles.css
sed -i 's/--primary: #00f2fe;/--primary: #00ff00;/g' web/styles.css
sed -i 's/--secondary: #4facfe;/--secondary: #008800;/g' web/styles.css
sed -i 's/background-image:/background-image: none; \/* /g' web/styles.css
sed -i 's/background-attachment: fixed;/background-attachment: fixed; *\//g' web/styles.css

cat << 'CSS' >> web/styles.css

#matrixCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0.3;
}
CSS
