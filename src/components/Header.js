import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title , onAdd, showAdd}) => {
   
    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            <Button color={showAdd ? '#d90429' : '#ef233c'}
             text={showAdd ? 'Close' : 'Add'}

              onClick={onAdd} />
        </header>
    ) 
}

Header.defaultProps = {
    title: 'Taskman',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
 
}
export default Header