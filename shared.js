/* shared.js — injects consistent nav + footer into every inner page */
(function(){
  const NAV_HTML = `
<div class="topstrip">
  <span>📍 Govt. Agriculture Farm, Rura Mallu, PO Shahjadpura, Distt. Jalaun (UP) – 285 001</span>
  <div>
    <a href="recruitment.html">🔴 Recruitment / Tenders</a>
    <a href="kisan-helpline.html">Kisan Helpline</a>
    <a href="contact.html">Contact</a>
  </div>
</div>
<header class="site-header">
  <a href="index.html" class="brand">
    <img src="https://jalaun.kvk4.in/img/logo.png" alt="KVK Jalaun" class="brand-logo"
         onerror="this.outerHTML='<div style=\\'width:60px;height:60px;background:#0d3318;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:#fff\\'>🌾</div>'">
    <div class="brand-text">
      <h1>Krishi Vigyan Kendra, Jalaun</h1>
      <span class="sub">ICAR · BUAT Banda</span>
      <span class="loc">Jhansi Division · Uttar Pradesh · PIN 285 001</span>
    </div>
  </a>
  <button class="burger" id="burger" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
  <nav class="main-nav" id="nav">
    <div class="ni"><a href="index.html">Home</a></div>
    <div class="ni"><button>About ▾</button><div class="dd">
      <a href="about.html">About KVK Jalaun</a>
      <a href="faculty.html">Faculty &amp; Staff</a>
      <a href="mandate.html">Mandate</a>
      <a href="district-profile.html">District Profile</a>
      <a href="infrastructure.html">Infrastructure &amp; Facilities</a>
      <a href="awards.html">Awards &amp; Recognitions</a>
      <a href="vision.html">Vision</a>
      <a href="impact.html">Impact of KVK</a>
    </div></div>
    <div class="ni"><button>Activities ▾</button><div class="dd">
      <a href="training.html">Training Programmes</a>
      <a href="fld.html">Front Line Demos (FLDs)</a>
      <a href="oft.html">On Farm Trials (OFTs)</a>
      <a href="extension.html">Extension Activities</a>
      <a href="success-stories.html">Success Stories</a>
      <a href="activities.html">All Activities &amp; News</a>
    </div></div>
    <div class="ni"><button>ICAR Schemes ▾</button><div class="dd">
      <a href="nfsm.html">NFSM</a>
      <a href="nmoop.html">NMOOP</a>
      <a href="ppvfra.html">PPVFRA</a>
      <a href="oft.html">OFTs</a>
      <a href="fld.html">FLDs</a>
      <a href="skill-development.html">Skill Development</a>
    </div></div>
    <div class="ni"><button>Farmers ▾</button><div class="dd">
      <a href="advisory.html">Advisory Services</a>
      <a href="agro-advisory.html">Agro Advisory</a>
      <a href="kisan-helpline.html">Kisan Helpline</a>
      <a href="weather.html">Weather</a>
      <a href="msp.html">MSP Rates</a>
      <a href="progressive-farmers.html">Progressive Farmers</a>
      <a href="contingency-plan.html">Contingency Plan</a>
    </div></div>
    <div class="ni"><button>Publications ▾</button><div class="dd">
      <a href="booklets.html">Booklets</a>
      <a href="leaflets.html">Leaflets</a>
      <a href="research-papers.html">Research Papers</a>
      <a href="newspapers.html">News Coverage</a>
    </div></div>
    <div class="ni"><button>Reports ▾</button><div class="dd">
      <a href="reports.html">Annual Progress Report</a>
      <a href="reports.html">Quarterly Reports (QPR)</a>
      <a href="reports.html">Monthly Reports (MPR)</a>
      <a href="reports.html">QRT Reports</a>
      <a href="annual-action-plan.html">Annual Action Plan</a>
    </div></div>
    <div class="ni"><button>Gallery ▾</button><div class="dd">
      <a href="gallery.html">Photo Gallery</a>
      <a href="video-gallery.html">Video Gallery</a>
    </div></div>
    <div class="ni"><a href="contact.html" class="nav-cta">Contact Us</a></div>
  </nav>
</header>
<div class="ticker">
  <div class="ticker-label">📢 Latest</div>
  <div class="ticker-body"><div class="ticker-inner">
    <span><a href="activities.html">Off campus Training programme at Village Khajuri</a></span>
    <span><a href="recruitment.html">Auction Letter — KVK Jalaun</a></span>
    <span><a href="activities.html">Kisan Mela Brochure — Download Now</a></span>
    <span><a href="activities.html">Dr Vister Joshi on Agri Start-up at Doordarshan Kisan — 22 Sep 2023</a></span>
    <span><a href="activities.html">Seed distribution under CFLD (Oilseeds)</a></span>
    <span><a href="activities.html">Off campus Training programme at Village Khajuri</a></span>
    <span><a href="recruitment.html">Auction Letter — KVK Jalaun</a></span>
    <span><a href="activities.html">Kisan Mela Brochure — Download Now</a></span>
    <span><a href="activities.html">Dr Vister Joshi on Agri Start-up at Doordarshan Kisan — 22 Sep 2023</a></span>
    <span><a href="activities.html">Seed distribution under CFLD (Oilseeds)</a></span>
  </div></div>
</div>`;

  const FOOT_HTML = `
<div class="imp-links">
  <h3>Important Links</h3>
  <div class="lnks">
    <a href="http://icar.org.in/" target="_blank" rel="noopener" class="lnk">ICAR</a>
    <a href="http://farmer.gov.in/" target="_blank" rel="noopener" class="lnk">Farmer Portal</a>
    <a href="http://ecourses.iasri.res.in/" target="_blank" rel="noopener" class="lnk">ICAR E-Courses</a>
    <a href="http://fao.org/" target="_blank" rel="noopener" class="lnk">FAO</a>
    <a href="http://ugc.ac.in/" target="_blank" rel="noopener" class="lnk">UGC</a>
    <a href="http://bausabour.com/" target="_blank" rel="noopener" class="lnk">Bihar Agricultural University, Sabour</a>
    <a href="http://pusauniversity.org.in/" target="_blank" rel="noopener" class="lnk">Rajendra Agricultural University, Pusa</a>
    <a href="http://kisangyan.com/" target="_blank" rel="noopener" class="lnk">Kisan Gyan</a>
    <a href="https://atarik.res.in/login.php" target="_blank" rel="noopener" class="lnk">MPR / QPR Portal</a>
  </div>
</div>
<footer class="site-footer">
  <div class="foot">
    <div class="foot-brand">
      <img src="https://jalaun.kvk4.in/img/logo.png" alt="KVK Jalaun" class="foot-logo"
           onerror="this.outerHTML='<div style=\\'font-size:2rem;margin-bottom:14px\\'>🌾</div>'">
      <p>Krishi Vigyan Kendra, Jalaun is a farm science centre of ICAR under Banda University of Agriculture &amp; Technology (BUAT), Banda. Since its establishment in 2005, KVK Jalaun has been serving the farming communities of Jalaun district through training, demonstrations, on-farm trials and advisory services.</p>
      <address>Govt. Agriculture Farm, Rura Mallu<br>PO. Shahjadpura, Distt. Jalaun<br>Uttar Pradesh – 285 001, India</address>
    </div>
    <div><h4>About KVK</h4><ul>
      <li><a href="about.html">About Us</a></li>
      <li><a href="faculty.html">Faculty &amp; Staff</a></li>
      <li><a href="mandate.html">Mandate</a></li>
      <li><a href="district-profile.html">District Profile</a></li>
      <li><a href="infrastructure.html">Infrastructure</a></li>
      <li><a href="awards.html">Awards</a></li>
      <li><a href="impact.html">Impact of KVK</a></li>
    </ul></div>
    <div><h4>Programmes</h4><ul>
      <li><a href="training.html">Training</a></li>
      <li><a href="fld.html">Front Line Demos</a></li>
      <li><a href="oft.html">On Farm Trials</a></li>
      <li><a href="nfsm.html">NFSM</a></li>
      <li><a href="nmoop.html">NMOOP</a></li>
      <li><a href="ppvfra.html">PPVFRA</a></li>
      <li><a href="extension.html">Extension Activities</a></li>
    </ul></div>
    <div><h4>Farmers &amp; Reports</h4><ul>
      <li><a href="advisory.html">Agro Advisory</a></li>
      <li><a href="kisan-helpline.html">Kisan Helpline</a></li>
      <li><a href="msp.html">MSP Rates</a></li>
      <li><a href="contingency-plan.html">Contingency Plan</a></li>
      <li><a href="reports.html">Progress Reports</a></li>
      <li><a href="recruitment.html">Recruitment / Tenders</a></li>
      <li><a href="contact.html">Contact Us</a></li>
    </ul></div>
  </div>
  <div class="foot-bottom">
    <span>© 2025 Krishi Vigyan Kendra, Jalaun · ICAR · BUAT Banda · All Rights Reserved</span>
    <span>jalaun.kvk4.in</span>
  </div>
</footer>`;

  /* inject header before body content */
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOT_HTML);

  /* mobile nav */
  const burger = document.getElementById('burger');
  const nav    = document.getElementById('nav');
  if (burger) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) nav.classList.remove('open');
    });
    nav.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.innerWidth <= 768) btn.closest('.ni').classList.toggle('open');
      });
    });
  }

  /* highlight current page */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav .ni > a').forEach(a => {
    if (a.getAttribute('href') === page) a.closest('.ni').classList.add('curr');
  });
})();
