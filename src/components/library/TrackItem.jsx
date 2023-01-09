const TrackItem = ({name, isActive}) => {
    return (
        <li style={isActive ? {background: 'blue'} : null}>
            {name}
        </li>
    )
}


export default TrackItem