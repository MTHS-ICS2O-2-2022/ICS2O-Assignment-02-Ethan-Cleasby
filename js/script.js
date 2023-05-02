/* Created by: Ethan Cleasby
 * Created on: May 2023
 * This file contains the JavaScript for index.html Assignment#2
 */

"use strict"
/* Created by: Ethan Cleasby
 * Created on: May 2023
 * This file contains the JavaScript for index.html Assignment#2
 */
"use strict"
/**
/* Function */
function calculate() {
  // Input
  const base = parseInt(
    document.getElementById("length-of-parallelogram").value
  )
  const height = parseInt(
    document.getElementById("width-of-parallelogram").value
  )

  // Process
  const area = base * height

  // Output
  document.getElementById("area").innerHTML = "The area is:" + area + "cm²"
}