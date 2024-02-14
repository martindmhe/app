import React from "react";
import "./Helpcard.css";

function Helpcard() {
  return (
    <>
      <center>
        <br></br>
        <br></br>
        <h1>Uploading Message Data</h1>
        <div class="card">
          <img src="https://i.imgur.com/NdnYSfm.png" alt="Choose your activity"></img>
          <div class="card__content">
            <p class="card__title">Your Activity</p>
            <p class="card__description">
              Log into your instagram account on a laptop and select "Your
              Activity" from the "More" navigation at the bottom left of the
              page.
            </p>
          </div>
        </div>
        <div class="card">
          <img src="https://i.imgur.com/oFZulB1.png" alt="Download your information"></img>
          <div class="card__content">
            <p class="card__title">Download Information</p>
            <p class="card__description">
              Select the "Download Information" option on the left of the page.
            </p>
          </div>
        </div>

        <div class="card">
          <img src="https://i.imgur.com/eCkzmeR.png" alt="Request a download"></img>
          <div class="card__content">
            <p class="card__title">Request a Download</p>
            <p class="card__description">
              Continue to your accounts center and select "Request a Download".
              Next, choose the "Select types of Information" option.
            </p>
          </div>
        </div>

        <div class="card">
          <img src="https://i.imgur.com/4s5FJJ0.png" alt="Select your download options"></img>
          <div class="card__content">
            <p class="card__title">Download Options</p>
            <p class="card__description">
              For your download options, please select "Messages", "JSON", "Low"
              media quality, and a data range of one week to one month.
            </p>
          </div>
        </div>

        <div class="card">
          <img src="https://i.imgur.com/a1jOegj.png" alt="Export your data"></img>
          <div class="card__content">
            <p class="card__title">Export Data</p>
            <p class="card__description">
              Once you submit your request, your data should be sent to your
              email within a few minutes. Download this folder and extract it.
            </p>
          </div>
        </div>
      </center>
    </>
  );
}

export default Helpcard;
