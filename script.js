    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        const isOpening = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileBtn.setAttribute('aria-expanded', String(isOpening));
      });
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    const specialtyDetails = document.querySelectorAll('#specialty-list .specialty-item');
    specialtyDetails.forEach(item => {
      item.addEventListener('toggle', () => {
        if (item.open) specialtyDetails.forEach(other => {
          if (other !== item) other.open = false;
        });
      });
    });

    function handleFormSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const reason = document.getElementById('reason').value;
      const shift = document.getElementById('shift').value;
      const message = document.getElementById('message').value.trim();

      const text = `Olá, Dra. Gracieli! Meu nome é ${name} (${phone}).\n` +
                   `Gostaria de agendar uma consulta para: ${reason}.\n` +
                   `Preferência de turno: ${shift}.\n` +
                   (message ? `Sintomas / observações: ${message}` : '');

      const waUrl = `https://wa.me/5551999491229?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    }
