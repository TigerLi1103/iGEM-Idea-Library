import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge, Button, Card } from '../components/UI';
import { PARTS_LIBRARY } from '../data/parts';
import { partsApiUrl } from '../lib/partsApi';
import { ArrowLeft, Copy, Dna, ExternalLink, Info } from 'lucide-react';

export const PartDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [serverAvailable, setServerAvailable] = useState(false);
  const [part, setPart] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(partsApiUrl('/api/parts/health'))
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('no server'))))
      .then(() => setServerAvailable(true))
      .catch(() => setServerAvailable(false));
  }, []);

  useEffect(() => {
    if (!id) return;
    if (!serverAvailable) {
      const local = PARTS_LIBRARY.find((p) => p.id === id);
      setPart(local ?? null);
      return;
    }
    fetch(partsApiUrl(`/api/parts/${encodeURIComponent(id)}`))
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('not found'))))
      .then((data) => setPart(data))
      .catch(() => setPart(null));
  }, [id, serverAvailable]);

  const registryUrl = useMemo(() => (id ? `https://parts.igem.org/Part:${id}` : '#'), [id]);

  const copySequence = async () => {
    if (!part?.sequence) return;
    await navigator.clipboard.writeText(part.sequence);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!id) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link to="/parts-blast">
          <Button variant="ghost"><ArrowLeft className="w-4 h-4" /> Back to BLAST</Button>
        </Link>
        <a href={registryUrl} target="_blank" rel="noreferrer">
          <Button variant="outline">Open in Registry <ExternalLink className="w-4 h-4" /></Button>
        </a>
      </div>

      {part ? (
        <>
          <section className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="verified">Part Detail</Badge>
              <Badge>{part.type || 'Unknown'}</Badge>
              <Badge>{part.category || 'Unknown'}</Badge>
              <Badge>{part.length || 0} bp</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">{part.id}</h1>
            <p className="text-xl text-slate-600">{part.name || part.description || part.id}</p>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4"><Dna className="w-5 h-5 text-emerald-600" /><h2 className="text-2xl font-bold text-slate-900">Sequence</h2></div>
              <code className="block text-xs md:text-sm bg-slate-950 text-emerald-200 rounded-2xl p-4 overflow-x-auto break-all whitespace-pre-wrap">
                {part.sequence || part.preview || 'No sequence available'}
              </code>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Button variant="secondary" onClick={copySequence}><Copy className="w-4 h-4" /> {copied ? 'Copied' : 'Copy sequence'}</Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4"><Info className="w-5 h-5 text-emerald-600" /><h2 className="text-2xl font-bold text-slate-900">Metadata</h2></div>
              <div className="space-y-3 text-sm text-slate-600">
                <div><span className="font-semibold text-slate-900">Name:</span> {part.name || '-'}</div>
                <div><span className="font-semibold text-slate-900">Type:</span> {part.type || '-'}</div>
                <div><span className="font-semibold text-slate-900">Category:</span> {part.category || '-'}</div>
                <div><span className="font-semibold text-slate-900">Length:</span> {part.length || 0} bp</div>
                <div><span className="font-semibold text-slate-900">Description:</span> {part.description || '-'}</div>
              </div>
            </Card>
          </section>
        </>
      ) : (
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Part not found</h2>
          <p className="text-slate-600">这个 part 目前没有加载出来。你可以回到 Parts BLAST 重新搜索。</p>
        </Card>
      )}
    </div>
  );
};
