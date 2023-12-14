const AnimalItem = ({item}) => {

  const handleReport = () => {
    window.alert(`Incidente sobre animal ${item.properties.title} relatado.`)
  }

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid gray',
    padding: '8px'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',

    }}>
      <div style={{
        backgroundImage: `url(${item.properties.imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        border: '1px solid gray'
      }}/>
      <div style={{
        fontSize: '16px',
        fontWeight: '900',
        padding: '16px 8px',
      }}>{item.properties.title}</div>
    </div>
    <div style={{
      fontSize: '12px',
      fontWeight: '400',
      padding: '16px 8px',
    }}>{item.properties.description}</div>
    <button onClick={handleReport} style={{
      margin: '16px 8px',
      textAlign: 'center',
      fontWeight: '900',
      background: '#D30000',
      padding: '8px 12px',
      borderRadius: '8px',
      color: 'white',

    }}>Relatar incidente</button>
  </div>
}

export default AnimalItem;