import { Html , useProgress } from '@react-three/drei'

const CanvasLoader = () => {
     const { progress } = useProgress();

     return (
        <Html center>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                color: '#f1f1f1'
            }}>
                <span className="canvas-loader"></span>
                <p className='text-sm text-[#f1f1f1] font-extrabold mt-10 '>{ progress != 0 ? `${progress.toFixed(2)}%` : 'Loading...'}</p>
            </div>
        </Html>
     )

}


export default CanvasLoader