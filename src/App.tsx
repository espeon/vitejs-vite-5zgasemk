import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  return (
    <>
      <div style={{ position: 'relative' }}>
        <img
          src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:4usmserhjqkvhldgedfjb3jw/bafkreidwjrsi5drutbz7xozzdds45y5h3ikceu6qwxgrwgh7hejm5syqbu@jpeg"
          alt="React logo"
          style={{
            position: 'relative',
            height: '90vh',
          }}
        />
        <img
          src={
            params.img ||
            'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:4usmserhjqkvhldgedfjb3jw/bafkreidwjrsi5drutbz7xozzdds45y5h3ikceu6qwxgrwgh7hejm5syqbu@jpeg'
          }
          alt="React logo"
          style={{
            position: 'absolute',
            bottom: '22vh',
            left: '5vh',
            height: '20vh',
          }}
        />
      </div>
    </>
  );
}

export default App;
