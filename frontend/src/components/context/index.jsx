import React, { useState, useRef, useEffect } from 'react';
import LogoSvg from '../../assets/favicon/icon.extended.en.svg'
import QrCodeImage from '../../assets/image/qr.code.image.png'

const CustomContextMenu = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const menuRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();

    const selection = window.getSelection();
    const text = selection.toString().trim();

    setSelectedText(text);
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setMenuVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedText);
    setMenuVisible(false);
  };

  const handleCut = () => {
    navigator.clipboard.writeText(selectedText).then(() => {
      document.execCommand('cut');

      setMenuVisible(false);
    });
  };


  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  const handlePaste = async () => {
    const input = document.querySelector('input:focus, textarea:focus');

    if (!input) {

      return;
    }

    input.focus();

    try {
      const text = await navigator.clipboard.readText();
      if (!text) return;

      const start = input.selectionStart;
      const end = input.selectionEnd;

      input.value = input.value.slice(0, start) + text + input.value.slice(end);

      input.selectionStart = input.selectionEnd = start + text.length;

      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);

    } catch (error) {
      console.error("Paste failed:", error);
      input.focus();
      document.execCommand('paste');
    }
  };

  const handleCopyPath = () => {
    navigator.clipboard.writeText(window.location.href);
    setMenuVisible(false);
  };

  const handlePrint = () => {
   
    setMenuVisible(false);

   
    setTimeout(() => {
      if (selectedText) {
       
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`<pre>${selectedText}</pre>`);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      } else {
        
        window.print();
      }
    }, 100);
  };

  const handleSearchGoogle = () => {
    if (selectedText) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(selectedText)}`, '_blank');
    }
    setMenuVisible(false);
  };

 

  const handleRefresh = () => {
    window.location.reload();
    setMenuVisible(false);
  };



  const handlePrintSelection = async () => {
    setMenuVisible(false);

    const logoResponse = await fetch(LogoSvg);
    const logoSVG = await logoResponse.text();

    setTimeout(() => {
      const printDiv = document.createElement('div');
      printDiv.id = 'print-selection-container';
      printDiv.style.cssText = `
      position: fixed;
      left: -9999px;
      top: 0;
      font-family: 'Inter', sans-serif;
      font-size: 12pt;
      line-height: 1.3;
    `;

      printDiv.innerHTML = `
      <div style="position:absolute;top:0mm;left:0mm;">
        ${logoSVG.replace('<svg', '<svg width="auto" height="10mm"')}
      </div>
      <div style="margin:20mm 0mm 0mm 0mm;">${selectedText}</div>
    `;

      document.body.appendChild(printDiv);

      const style = document.createElement('style');
      style.textContent = `
      @media print {
        body > :not(#print-selection-container) { display: none; }
        #print-selection-container {
          position: static !important;
          left: 0 !important;
        }
        @page { margin: 15mm; }
      }
    `;
      document.head.appendChild(style);

      window.print();

      setTimeout(() => {
        printDiv.remove();
        style.remove();
      }, 100);
    }, 100);
  };

  const handleSelectAll = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const wasMenuVisible = menuVisible;
    setMenuVisible(false);

    setTimeout(() => {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.body);
      selection.removeAllRanges();
      selection.addRange(range);


      const selectedText = selection.toString();

     
      setSelectedText(selectedText);

      setMenuVisible(wasMenuVisible);
    }, 10);
  };

  const handleQRcode = () => {
    const link = document.createElement('a');
    link.href = QrCodeImage;
    link.download = 'QR code of Absheron Career Center.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Check this out!',
      url: window.location.href,
    }).then(() => {
      console.log('Thanks for sharing!');
    }).catch((error) => {
      console.error('Error sharing:', error);
    });
  } else {
    alert('Share not supported on this browser.');
  }
};



  return (
    <div onContextMenu={handleContextMenu}>
      {children}

      {menuVisible && (
        <div
          ref={menuRef}
          style={{
            left: menuPosition.x,
            top: menuPosition.y,
            position: 'fixed',
            zIndex: 9999,
          }}
        >
          {selectedText ? (
            <>
              <div className="Main-Popup Main-Popup-Center No-Select">
                <div className="Popup-Item" onClick={handleCopy}>
                  <span className='Link'>
                    <p className='link-text'>Copy</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handlePaste} onMouseDown={handleMouseDown} >
                  <span className='Link'>
                    <p className='link-text'>Paste</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handleCut}>
                  <span className='Link'>
                    <p className='link-text'>Cut</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handleSelectAll}>
                  <span className='Link'>
                    <p className='link-text'>Select all</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handlePrintSelection}>
                  <span className='Link'>
                    <p className='link-text'>Print</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handleSearchGoogle}>
                  <span className='Link'>
                    <p className='link-text'>Search on web</p>
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="Main-Popup Main-Popup-Center">
                <div className="Popup-Item" onClick={handlePaste} onMouseDown={handleMouseDown} >
                  <span className='Link'>
                    <p className='link-text'>Paste</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handleCopyPath}>
                  <span className='Link'>
                    <p className='link-text'>Copy path</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handleRefresh}>
                  <span className='Link'>
                    <p className='link-text'>Refresh</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handleSelectAll}>
                  <span className='Link'>
                    <p className='link-text'>Select all</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handleShare}>
                  <span className='Link'>
                    <p className='link-text'>Share</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handleQRcode}>
                  <span className='Link'>
                    <p className='link-text'>Get QR code</p>
                  </span>
                </div>
                <div className="Popup-Item" onClick={handlePrint}>
                  <span className='Link'>
                    <p className='link-text'>Print</p>
                  </span>
                </div>
              </div>


            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomContextMenu;
