export type Dataset = {
    id: number;
    name: string;
    status: 'Connected' | 'Uploaded' | 'Error';
    created_at: number;
    created_by_name: string;
    created_by_email: string;
    type: 'pdf' | 'docx' | 'aep' | 'fig' | 'jpg' | 'mp4';
};

export const imageNames = {
    jpg: '/JPG.svg',
    pdf: '/PDF.svg',
    docx: '/DOCX.svg',
    aep: '/AEP.svg',
    fig: '/FIG.svg',
    mp4: '/MP4.svg',
};

export const defaultData: Dataset[] = [
    {
        id: 1,
        name: 'Tech requirements.pdf',
        status: 'Uploaded',
        created_at: Date.now(),
        created_by_name: 'Olivia Rhye',
        created_by_email: 'olivia@untitledui.com',
        type: 'pdf',
    },
    {
        id: 2,
        name: 'Dashboard screenshot.jpg',
        status: 'Connected',
        created_at: Date.now(),
        created_by_name: 'Phoenix Baker',
        created_by_email: 'phoenix@untitledui.com',
        type: 'jpg',
    },
    {
        id: 3,
        name: 'Dashboard prototype recording.mp4',
        status: 'Connected',
        created_at: Date.now(),
        created_by_name: 'Lana Steiner',
        created_by_email: 'lana@untitledui.com',
        type: 'mp4',
    },
    {
        id: 4,
        name: 'Dashboard prototype FINAL.fig',
        status: 'Connected',
        created_at: Date.now(),
        created_by_name: 'Demi Wilkinson',
        created_by_email: 'demi@untitledui.com',
        type: 'jpg',
    },
    {
        id: 5,
        name: 'UX Design Guidelines.docx',
        status: 'Connected',
        created_at: Date.now(),
        created_by_name: 'Candice Wu',
        created_by_email: 'candice@untitledui.com',
        type: 'docx',
    },
    {
        id: 6,
        name: 'Dashboard interaction.aep',
        status: 'Error',
        created_at: Date.now(),
        created_by_name: 'Natali Craig',
        created_by_email: 'natali@untitledui.com',
        type: 'aep',
    },
    {
        id: 7,
        name: 'Dashboard interaction.aep',
        status: 'Connected',
        created_at: Date.now(),
        created_by_name: 'Natali Craig',
        created_by_email: 'natali@untitledui.com',
        type: 'aep',
    },
];
