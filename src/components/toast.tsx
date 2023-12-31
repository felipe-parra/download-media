import React from 'react'

interface ToastProps {
  id: number;
  message: string;
  type: string;
  onRemove?: (id: number) => void;
  onDismiss?: (id: number) => void;
  onConfirm?: (id: number) => void;
  onReject?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onRestore?: (id: number) => void;
  onSave?: (id: number) => void;
  onUndo?: (id: number) => void;
  onRedo?: (id: number) => void;
  onCopy?: (id: number) => void;
  onPaste?: (id: number) => void;
  onCut?: (id: number) => void;
  onSearch?: (id: number) => void;
  onFilter?: (id: number) => void;
  onSort?: (id: number) => void;
  onGroup?: (id: number) => void;
  onUnGroup?: (id: number) => void;
}

export default function Toast({ id, message, type }: ToastProps) {
  return (
    <div className="toast toast-end">
      <div className="alert alert-info">
        <span>{message}</span>
      </div>
    </div>
  )
}
