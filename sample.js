const idata = document.getElementById("idata")
const odata = document.getElementById("odata")
const inputUnit = document.getElementById("inputUnit")
const outputUnit = document.getElementById("outputUnit")

    function calculate() {
           
            // INCHES
            if (inputUnit.value=='in' && outputUnit.value=='in') {
                var result = 0
                result = idata.value * 1
                odata.value = result
            }

            else if (inputUnit.value=='in' && outputUnit.value=='ft') {
                var result = 0
                result = idata.value * 0.083
                odata.value = result
            }

            else if (inputUnit.value=='in' && outputUnit.value=='yd') {
                var result = 0
                result = idata.value * 0.0277777778
                odata.value = result
            }

            // FOOT
            else if (inputUnit.value=='ft' && outputUnit.value=='ft') {
                var result = 0
                result = idata.value * 1
                odata.value = result
            }

            else if (inputUnit.value=='ft' && outputUnit.value=='in') {
                var result = 0
                result = idata.value * 12
                odata.value = result
            }

            else if (inputUnit.value=='ft' && outputUnit.value=='yd') {
                var result = 0
                result = idata.value * 0.3333
                odata.value = result
            }

            // YARDS
            else if (inputUnit.value=='yd' && outputUnit.value=='yd') {
                var result = 0
                result = idata.value * 1
                odata.value = result
            }
            else if (inputUnit.value=='yd' && outputUnit.value=='in') {
                var result = 0
                result = idata.value * 36
                odata.value = result
            }
            else if (inputUnit.value=='yd' && outputUnit.value=='ft') {
                var result = 0
                result = idata.value * 3
                odata.value = result
            }

        }