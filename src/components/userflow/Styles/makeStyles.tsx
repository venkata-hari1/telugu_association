import { makeStyles } from 'tss-react/mui';
import WelcomeImage from '../../../assets/welcomepage.png';
export const Lato={
    fontFamily:'"Lato", sans-serif',
}
const flex={
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column' as 'column',
    alignContent:'center',
}
export const useStyles = makeStyles()(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
      
        backgroundImage: `url(${WelcomeImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',       
        backgroundColor: '#fff',       
        minHeight: '100vh',
        width: '100%',
        marginTop: '-10px',
      },
    commontext:{
        ...Lato,
        marginBottom:'5px',
        fontWeight:'bold',
        fontSize:'15px',
        color:'#3DB80C',
        textAlign:'center' as 'center'
    },
    sidebarstyle:{
        position:'relative'
    },
    sidebarbarbox1:{
        background: 'linear-gradient(180deg, #5BE823 0%, #3DB80C 100%)',
        height:'7.6vh'
    },
    logo_image:{
    position:'absolute',

    top:0,

    objectFit:'cover',
     width:'150px',
     height:'150px'
    },
    buttons:{
        padding:'10px',
        marginTop:'80px',
        '&>button':{
           ...Lato,
           width:'100%',
           padding:'10px',
            fontWeight:'bold',
            fontSize:'12px',
            background: '#3DB80C',
            color:'white',
            marginTop:'15px'
        }
    },
    sponsorimages:{
        objectFit:'cover',
        width:'100%',
        marginTop:'3px',
        padding:'3px'
    },
    footertitle:{
        ...Lato,
        fontSize:'16px',
        marginTop:'10px',
        marginLeft:'5px',
        color:'white',
        fontWeight:'bold'
    },
    
    root_socialmediaicons_container:{
        display:'flex',
        justifyContent:'space-between',
        width:'30%',
        marginTop:'15px'
    },
    socailmediaicon_container:{
        background:'white',
        borderRadius:'50%',
        width:'30px',
        height:'30px',
        
    },
    socailmediaicon:{
        fontSize:'15px'
    },
    footeroptions:{
        display:'grid',
        gridTemplateColumns:'50% 50%'
    },
    volunteer_btn:{
        ...Lato,
        fontWeight:'bold',
       color:' #3DB80C !important',
       fontSize:'13px',
       marginTop:'2%',
       marginBottom:'2%',
        background:'white',
        
    },
    
    copyright_text:{
        ...Lato,
        fontSize:'11px',
        color:'white !important',
        fontWeight:'600'
    },
    footertext:{
        height: '5vh',
        color: 'white',
        textTransform: 'none',
        fontSize:'14px',
        padding: '10px',
        whiteSpace: 'nowrap',
        position: 'relative',
        fontFamily: '"Lato", sans-serif',
        fontWeight: 'bold',
        mx: 1,
    },
    footercontainer:{
        marginTop:'1px',
        background: '#3DB80C',width:'76%',padding:'15px',
        borderTopLeftRadius:'20px',
        borderTopRightRadius:'20px'
    },
    logo:{
        ...flex,
        width:'20%',
    }
}))