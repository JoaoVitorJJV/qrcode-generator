
import './App.css';
import QRCode from 'qrcode.react';
import { useRef, useState } from 'react';

function App() {
  const [url, setUrl] = useState('https://localhost');
  const qrCodeRef = useRef(null);

  const handleDonwload = () => {
    const canvas = document.querySelector('.HpQrcode > canvas');
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "QRCode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // if (qrCodeRef.current) {

    //   html2canvas(qrCodeRef)
    //     .then((canvas) => {
    //       const a = document.createElement('a');
    //       a.href = canvas.toDataURL();
    //       a.download = 'qrcode.png';
    //       a.click();
    //     })


    // }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='HpQrcode' ref={qrCodeRef}>
          <QRCode value={url} />
        </div>
        <p>
          Insira sua URL e a imagem irá aparecer acima
        </p>
        <input
          type="text"
          style={{ padding: 10, outline: 'none', width: '40%' }}
          placeholder='Insira sua URL aqui!'
          onChange={e => setUrl(e.target.value)}
        />
        <button
          style={{
            marginTop: 20,
            width: 210,
            backgroundColor: '#056ddb',
            color: 'white',
            padding: 10,
            border: 'none',
            borderRadius: 20
          }}
          onClick={handleDonwload}
        >
          Baixar
        </button>
      </header>
    </div>
  );
}

export default App;
