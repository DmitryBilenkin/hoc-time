
function DateTimePretty (Component) {

    return function (props){    
        const {date, ...othersProps} = props

        const differnceTime = new Date(new Date().getTime() - new Date(date).getTime()) / 1000;
        
        if (differnceTime <= 3600){
            return (
                <Component date={'12 минут назад'} {...othersProps}/>       
            )
        }

        if (differnceTime > 3600 && differnceTime <= 86400){
            return (
                <Component date={'5 часов назад'} {...othersProps}/>       
            )
        }
        
        if(differnceTime > 86400) {
            return (
                <Component date={'X дней назад'} {...othersProps}/>       
            )
        }
    }
}

export default DateTimePretty;
