function calculateClassification() {
      const grades = document.querySelectorAll('.grade');
      let level2Score = 0;
      let level3Score = 0;
      let level3Grade1Count = 0;

      grades.forEach((select, index) => {
        const grade = parseInt(select.value);
        if (index < 4) {
          level2Score += 30 * grade; // Level 2 single weighted
        } else {
          level3Score += 30 * grade; // Raw score for Level 3
          if (grade === 1) level3Grade1Count += 30;
        }
      });

      const weightedL3 = level3Score * 2;
      const totalScore = level2Score + weightedL3;

      let classification = "";
      if (totalScore <= 630) {
        classification = "First-Class Honours (1st)";
      } else if (totalScore <= 690) {
        classification = level3Grade1Count >= 60 ?
          "First-Class Honours (1st) [via borderline]" :
          "Upper Second-Class Honours (2:1)";
      } else if (totalScore <= 900) {
        classification = "Upper Second-Class Honours (2:1)";
      } else if (totalScore <= 960) {
        classification = "Lower Second-Class Honours (2:2) [via borderline]";
      } else if (totalScore <= 1170) {
        classification = "Lower Second-Class Honours (2:2)";
      } else if (totalScore <= 1230) {
        classification = "Third-Class Honours (3) [via borderline]";
      } else {
        classification = "Third-Class Honours (3)";
      }

      document.getElementById('result').innerText = `Total Score: ${totalScore}\nClassification: ${classification}`;
    }
