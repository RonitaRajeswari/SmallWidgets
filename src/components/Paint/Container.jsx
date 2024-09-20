import React, { useState, useRef, useEffect } from 'react';

function Container({ utensil }) {
  const [drawing, setDrawing] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { tool, weight, color } = utensil;

  useEffect(() => {
    // Adjust the canvas size to fit the container div
    const canvas = canvasRef.current;
    const container = containerRef.current;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Prevent the canvas from being cleared on resize
    const context = canvas.getContext('2d');
    context.lineJoin = 'round';
    context.lineCap = 'round';
  }, []);

  function handleMouseDown(e) {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set color and weight dynamically, depending on the tool
    if (tool === 'brush') {
      context.strokeStyle = color;
      context.lineWidth = weight;
    } 

    if (tool === 'brush' || tool === 'eraser') {
      setDrawing(true);
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    } else if (tool === 'bucket') {
      context.fillStyle = color;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  function handleMouseMove(e) {
    if (!drawing || (tool !== 'brush' && tool !== 'eraser')) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Continue drawing with the current tool settings
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  }

  function handleMouseUp() {
    setDrawing(false);
  }

  return (
    <div 
      ref={containerRef} 
      className="m-4" 
      style={{ height: '500px', border: '5px solid rgb(207, 207, 207)', borderStyle: 'groove' }}
    >
      <canvas
        ref={canvasRef}
        style={{ backgroundColor: 'white', display: 'block', width: '100%', height: '100%' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Stop drawing when the mouse leaves the canvas
      />
    </div>
  );
}

export default Container;
