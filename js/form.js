const tripTypeRadios = document.querySelectorAll('input[name="trip-type"]');
        const returnDateInput = document.getElementById('return-date');

        tripTypeRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (document.querySelector('input[name="trip-type"]:checked').value === 'one-way') {
                    returnDateInput.disabled = true;
                    returnDateInput.value = ''; // Clear the value when disabled
                } else {
                    returnDateInput.disabled = false;
                }
            });
        });

        // Ensure the return date is disabled initially if "Solo Ida" is selected
        if (document.querySelector('input[name="trip-type"]:checked').value === 'one-way') {
            returnDateInput.disabled = true;
            returnDateInput.value = ''; // Clear the value if initially disabled
        }

