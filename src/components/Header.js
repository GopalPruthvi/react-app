import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header style={headingStyle} className='header'>
            <h2 >{title}</h2>
        </header>
    )
}

Header.defaultProps = {
    title: 'Movie List'
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyle ={
    color: 'green',
    backgroundColor: 'rgb(196, 192, 192)'
}

export default Header;