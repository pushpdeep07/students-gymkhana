import { ethers } from "./ethers.js";

const connectButton = document.getElementById('Button');
const registerButton = document.getElementById('registerButton');
const standingsTable = document.getElementById('candidatesTable');

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}

connectButton.onclick = async function () {
  try {

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    if (accounts.length === 0) {
      alert("Please connect your MetaMask account.");
    } else {
    
      window.alert("Successfully connected to MetaMask Wallet.");
      window.location.href = "file.html";
    }
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    alert("An error occurred while connecting to MetaMask. Please try again.");
  }
};

registerButton.onclick = async function () {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    if (accounts.length === 0) {
      alert("Please connect your MetaMask account to register.");
    } else {
      window.alert("Successfully registered with MetaMask!");

    }
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    alert("An error occurred while registering with MetaMask. Please try again.");
  }
  updateStandingsTable(candidateData);
};
function updateStandingsTable(data) {

  standingsTable.innerHTML = `
    <tr>
      <th>Candidate Name</th>
      <th>Number of Votes</th>
    </tr>
  `;


  data.forEach(candidate => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const votesCell = document.createElement('td');

    nameCell.textContent = candidate.name;
    votesCell.textContent = candidate.votes;

    row.appendChild(nameCell);
    row.appendChild(votesCell);

    standingsTable.appendChild(row);
  });
}
