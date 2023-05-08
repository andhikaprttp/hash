 <script>
      // Mendefinisikan fungsi hash
      function hash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          let char = str.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
      }

      // Menampilkan nilai hash pada halaman HTML
      function displayHash() {
        const input = document.getElementById("input").value;
        const output = document.getElementById("output");
        output.innerHTML = hash(input);
      }