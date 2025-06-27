const searchBtn = document.getElementById('searchBtn');
const wordInput = document.getElementById('wordInput');
const resultBox = document.getElementById('result');

searchBtn.addEventListener('click', () => {
  const word = wordInput.value.trim();
  if (word === '') {
    resultBox.innerHTML = `<p>Please enter a word.</p>`;
    return;
  }

  fetchDefinition(word);
});

async function fetchDefinition(word) {
  resultBox.innerHTML = `<p>Loading...</p>`;

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    if (!response.ok) {
      throw new Error('Word not found');
    }

    const data = await response.json();
    const entry = data[0];

    const phonetic = entry.phonetics?.[0]?.text || 'N/A';
    const audio = entry.phonetics?.[0]?.audio || '';
    const meanings = entry.meanings.map(meaning => {
      return `
        <h3>${meaning.partOfSpeech}</h3>
        <ul>
          ${meaning.definitions.map(def => `<li>${def.definition}${def.example ? `<br><em>Example: ${def.example}</em>` : ''}</li>`).join('')}
        </ul>
      `;
    }).join('');

    resultBox.innerHTML = `
      <h2>${entry.word} <span>(${phonetic})</span></h2>
      ${audio ? `<audio controls src="${audio}"></audio>` : ''}
      ${meanings}
    `;
  } catch (error) {
    resultBox.innerHTML = `<p>❌ ${error.message}</p>`;
  }
}
