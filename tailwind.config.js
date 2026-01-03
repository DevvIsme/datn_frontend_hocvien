/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
   
     
    
      fontSize: {
        font12 : ['12px', '18px'],
        font18 : ['18px', '27px'],
        font24px : ['24px', '36px'],
        font48lh : ['48px', "62.4px"],
        font16lh : ['16px', '19.36px'],
        font28 : ['28px', '42px'],
        font28lh : ['28px', '40px'],
        font36lh : ['36px', '52px'],
        font20lh : ['20px', '30px'],
        font14 : ['14px', '22px'],
        font10 : ['10px','12px'],
        font80px : ['80px', '88px']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FFFFFF 38%, #FFFFFF 63%)',
      },
       keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        "finish-bar": {
          '0%':   {width: '75%'},
          '50%':  {width: '80%'},
          '75%':  {width: '90%'},
          '100%': {width: '95%'},
        },
        "clock": {
          '100%': {transform: 'rotate(180deg)'}
        }
      },
        animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'finish': 'finish-bar 250ms cubic-bezier(0.5, 0.72, 0.4, 0.82) forwards',
        'clock': 'clock 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite'
      },
      spacing : {
        '10%' : '10%',
        '20%' : '20%',
      },
      aspectRatio: {
        '16/9': '16/9',
        '6/4' : '6/4',
        '4/3' : '4/3'
      },
      height : {
        '88' : '88px',
        '200' : '200px',
        '700':'700px'
      },
      padding :{
        '10px' : '10px',
        '6px': '6px',
        '5px' : '5px',
        '120px' : '120px'
      },
      borderRadius : {
        '100' : "100px"
      },
      margin :{
        '-13': '-13px',
        'a50px':'-50px',
        'a140px' : '-140px'
      },
      width :{
        '124px':'124px',
        '30per' : '30%'
      },
      borderRadius : {
        '52px' : '52px',
        '100px' : '100px',
        '10px' : '10px'
      },
      boxShadow : {
        'continue':"0px 0px 20px 0px #003E9B0D",
        'box-shadow-1':"rgba(0, 62, 155, 0.05)",
        "box-shadow-2":"-4px 4px 20px 0px #20b4861f",
      },

      borderRadius : {
        'radius-chat-right': '8px 8px 0px 8px',
        'radius-chat-left' : '8px 8px 8px 0px'
      },
      
      colors: {
        "customColor": 'rgba(124, 136, 168, 0.5)',
        'custom-dark': 'rgba(20, 20, 20, 0.5)',
        'customColor-2': 'rgba(65, 71, 86, 0.8)',
        'bg-color-learn' : 'rgba(30, 30, 30, 0.7);',
        'custom-gradient-banner': 'rgba(130, 138, 158, 0.3)',
        "modal" : 'rgba(0, 0, 0, 0.4)',
        'color-primary' : '#273266',
        'color-gray' : '#636B90',
        'color-border' : '#D1D4E0',
        'color-white' : '#fff',
        'color-primary-2': '#005ED3',
        'primary-brand': '#005ED3',
         "back1": 'rgb(var(--color-back1))',
        'bg':'rgba(124, 136, 168, 0.3);',
        'bg-content-slide':'rgba(65, 71, 86, 0.6)',
        'color-text-1':'#3C4378',
        'bg-heart':'#7C88A8',
        'color-border-2':'#D2D6E4',
        'color-text-3':'rgba(39, 50, 102, 1)',
        'color-border-3':'#005ED3',
        'border-heart':'rgba(255, 255, 255, 0.45)',
        'color-bg-pdf':'rgba(82, 86, 89, 1)',
        'bg-chat':'#f0f1f5',
        'color-button-change-slide': '#DDDFE3',
        "check-ok": 'rgb(var(--color-check-ok))',
        "cam": 'rgb(var(--color-cam))',
        "input-blue-gray": 'rgb(var(--color-input-blue-gray))',
                "light-warning": 'rgb(var(--color-light-warning))',
        'bg-modal':'rgba(40, 45, 87, 0.5)',
        'color-text-breakcurmb':'#96BBF3',
        'color-red': '#FB324A',
        'arrow': '#E6E6E6',
        "color-primary-3":"#00479F",
        "color-greend-1":"#20cd3e",
        "color-greend-2":"#059649",
        "color-primary-4":"#EDF5FF",
        "color-gray-2":"#CECECE",
        'training':'#EEF1F7',
        'color-purple':"#969DB8",
        'color-purple-2':"#7C88A8",
        'color-white-2':"#F6F8FC",
        "color-greend-3":"#ECF6F1",
        "color-red-2": "#FFF5F4",
        'orange-background': 'rgb(var(--color-orange-background))',
            'orange-text': 'rgb(var( --color-orange-text))',
        "color-orange-1":"#FFA100",
        "color-orange-2":"#FFFCF4",
        "arrow-2": "#A5ABCA",
        'dangnhap2':'rgba(255, 255, 255, 0.2)'
      },
      height:{
        '300px' : '300px',
        
      },
      width : {
        '10%' : '10%'
      },
      minHeight: {
        'box-content': '436px',
        'box-compe':'480px'
      },
      backgroundImage : {
        "learn" : "url('@/assets/images/bg-learn.jpg')",
        'white-gradient' : 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.9))',
        'slider' : "url('@/assets/images/bg-home-2.png')",
        'BgCourse': "url('@/assets/images/BG.png')",
        'BgDaoTaoMobile': "url('@/assets/images/BG-min.png')",
        'dangnhap':'linear-gradient(180deg, #004DC1 -8.47%, #0A266D 86.44%)',
        

      },
      screens : {
        "Screen300px" : "300px"
      },
      
    },
  },
  plugins: []
}

