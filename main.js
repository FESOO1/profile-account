const accountsContainer = document.querySelector('.accounts');

const userData = [
    {
      "socialMediaPic": "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1724447475~exp=1724451075~hmac=f570768b6cff23c36911e6feb28bfb84b7da2f36a474506f0ac5669d6cce5255&w=740",
      "userName": "firdavs_utkirov",
      "aboutMedia": "Daily notes and tasks."
    },
    {
      "socialMediaPic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQu9Eps-lIo9VLZN744m1zkSQjJksizFUHyQ&s",
      "userName": "firdavs_utkirov",
      "aboutMedia": "Sharing coding tips and tricks."
    },
    {
      "socialMediaPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      "userName": "firdavs_utkirov",
      "aboutMedia": "Updates on personal projects."
    },
    {
      "socialMediaPic": "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      "userName": "firdavs_utkirov",
      "aboutMedia": "Following the latest tech trends."
    },
    {
      "socialMediaPic": "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg",
      "userName": "firdavs_utkirov",
      "aboutMedia": "Connecting with other developers."
    }
];

const userLinks = [
    {
        socialMedia: 'https://x.com/account/access'
    },
    {
        socialMedia: 'https://www.facebook.com/'
    },
    {
        socialMedia: 'https://www.instagram.com/'
    },
    {
        socialMedia: 'https://www.linkedin.com/'
    },
    {
        socialMedia: 'https://www.upwork.com/'
    }
]

for (let i = 0; i < 5; i++) {
    const anchorContainer = document.createElement('a');
    anchorContainer.classList.add('account');
    anchorContainer.setAttribute('href', userLinks[i].socialMedia);
    anchorContainer.setAttribute('target', '_blank')
    anchorContainer.innerHTML = `
    <div class="account-inner">
        <div class="account-pic">
            <img src="${userData[i].socialMediaPic}" alt="" class="account-picture">
        </div>
        <div class="account-about">
            <h3>@${userData[i].userName}</h3>
            <p>${userData[i].aboutMedia}</p>
        </div>
    </div>
    <svg class="account-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
        <path d="M11.1004 3.00208C7.4515 3.00864 5.54073 3.09822 4.31962 4.31931C3.00183 5.63706 3.00183 7.75796 3.00183 11.9997C3.00183 16.2415 3.00183 18.3624 4.31962 19.6801C5.6374 20.9979 7.75836 20.9979 12.0003 20.9979C16.2421 20.9979 18.3631 20.9979 19.6809 19.6801C20.902 18.4591 20.9916 16.5484 20.9982 12.8996" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.4803 3.51751L14.931 9.0515M20.4803 3.51751C19.9863 3.023 16.6587 3.0691 15.9552 3.0791M20.4803 3.51751C20.9742 4.01202 20.9282 7.34329 20.9182 8.04754" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    `;

    accountsContainer.appendChild(anchorContainer);
};