import { Download, FileText, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface PDFDownloadProps {
  title: string;
  description: string;
  filename: string;
  fileSize?: string;
  previewImage?: string;
  downloadUrl: string;
  className?: string;
}

export function PDFDownload({
  title,
  description,
  filename,
  fileSize = "2.5 MB",
  previewImage,
  downloadUrl,
  className = ""
}: PDFDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePreview = () => {
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className={`bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex items-start space-x-4">
        {previewImage ? (
          <div className="flex-shrink-0">
            <img 
              src={previewImage} 
              alt={`${title} preview`}
              className="w-16 h-20 object-cover rounded-lg border border-slate-200"
            />
          </div>
        ) : (
          <div className="flex-shrink-0 w-16 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
            <FileText className="w-8 h-8 text-white" />
          </div>
        )}
        
        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-lg text-brand-charcoal mb-1">{title}</h3>
          <p className="text-sm text-brand-light-gray mb-2 line-clamp-2">{description}</p>
          <div className="flex items-center space-x-4 text-xs text-brand-light-gray">
            <span>PDF Document</span>
            <span>•</span>
            <span>{fileSize}</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreview}
            className="flex items-center space-x-1"
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </Button>
          
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            size="sm"
            className="flex items-center space-x-1 bg-brand-primary hover:bg-brand-secondary"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? 'Downloading...' : 'Download'}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

interface PDFGalleryProps {
  documents: Array<{
    title: string;
    description: string;
    filename: string;
    fileSize?: string;
    previewImage?: string;
    downloadUrl: string;
  }>;
  className?: string;
}

export function PDFGallery({ documents, className = "" }: PDFGalleryProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="font-manrope font-bold text-2xl text-black mb-2">
          Download Resources
        </h3>
        <p className="text-brand-charcoal">
          Get detailed information about our platforms and solutions
        </p>
      </div>
      
      <div className="grid gap-4">
        {documents.map((doc, index) => (
          <PDFDownload
            key={index}
            title={doc.title}
            description={doc.description}
            filename={doc.filename}
            fileSize={doc.fileSize}
            previewImage={doc.previewImage}
            downloadUrl={doc.downloadUrl}
          />
        ))}
      </div>
    </div>
  );
}