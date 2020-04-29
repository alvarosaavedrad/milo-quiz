/**
 * Quiz Controller
 */

(() => {
  // Data
  const kms = [
    // Quiz 1
    [5, 6, 7, 8],
    // Quiz 2
    [5, 6, 7, 8, 9, 10],
    // Quiz 3
    [5, 6, 7, 8],
    // Quiz 4
    [5, 6, 7, 8],
    // Quiz 5
    [5, 6, 7, 8, 9, 10],
  ];

  // Selected answers by user
  const selections = [];

  // Getting questions
  const blocks = document.querySelectorAll("fieldset");

  // Getting answers per question
  const checkboxes = [];

  for (let i = 0; i < blocks.length; i++) {
    checkboxes.push(Array.from(blocks[i].querySelectorAll("input")));
  }

  // Changing checkboxes to radios and adding event
  for (let i = 0; i < checkboxes.length; i++) {
    for (let j = 0; j < checkboxes[i].length; j++) {
      checkboxes[i][j].setAttribute("type", "radio");

      checkboxes[i][j].addEventListener("click", (e) => {
        disableInputsAfterSelection(i);
      });
    }
  }

  // Disable unselected answers
  function disableInputsAfterSelection(group) {
    for (let i = 0; i < checkboxes[group].length; i++) {
      if (!checkboxes[group][i].checked) {
        checkboxes[group][i].disabled = true;
      } else {
        selections.push([group, i]);
      }
    }

    if (selections.length === blocks.length) {
      checkResult();
    }
  }

  // Check result
  function checkResult() {
    let totalKms = 0;

    for (let i = 0; i < selections.length; i++) {
      totalKms += kms[selections[i][0]][selections[i][1]];
    }

    console.log("totalKms:", totalKms);
  }
})();
